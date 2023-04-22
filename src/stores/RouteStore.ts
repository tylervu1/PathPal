import Store from '@/stores/Store'
import { Action } from '@/stores/Dispatcher'
import { ClearPoints, ClearRoute, RemovePoint, RouteRequestSuccess, SetPoint, SetSelectedPath } from '@/actions/Actions'
import QueryStore, { RequestState } from '@/stores/QueryStore'
import { Path, RoutingArgs, RoutingResult } from '@/api/graphhopper'

export interface RouteStoreState {
    routingResult: RoutingResult
    selectedPath: Path
}

export default class RouteStore extends Store<RouteStoreState> {
    private static getEmptyPath(): Path {
        return {
            bbox: undefined,
            instructions: [],
            points: {
                coordinates: [],
                type: 'LineString',
            },
            points_encoded: false,
            snapped_waypoints: {
                type: 'LineString',
                coordinates: [],
            },
            ascend: 0,
            descend: 0,
            details: {
                max_speed: [],
                street_name: [],
                toll: [],
                road_environment: [],
                road_class: [],
                track_type: [],
                country: [],
                get_off_bike: [],
                road_access: [],
            },
            distance: 0,
            points_order: [],
            time: 0,
            description: '',
        }
    }

    private readonly queryStore: QueryStore

    constructor(queryStore: QueryStore) {
        super(RouteStore.getInitialState())
        this.queryStore = queryStore
    }

    reduce(state: RouteStoreState, action: Action): RouteStoreState {
        if (action instanceof RouteRequestSuccess) {
            return this.reduceRouteReceived(state, action)
        } else if (action instanceof SetSelectedPath) {
            return {
                ...state,
                selectedPath: action.path,
            }
        } else if (
            action instanceof SetPoint ||
            action instanceof ClearRoute ||
            action instanceof ClearPoints ||
            action instanceof RemovePoint
        ) {
            return RouteStore.getInitialState()
        }
        return state
    }

    private static getInitialState(): RouteStoreState {
        return {
            routingResult: {
                paths: [],
                info: {
                    copyright: [],
                    took: 0,
                },
            },
            selectedPath: RouteStore.getEmptyPath(),
        }
    }

    private reduceRouteReceived(state: RouteStoreState, action: RouteRequestSuccess) {
        if (this.isStaleRequest(action.request)) return state

        if (RouteStore.containsPaths(action.result.paths)) {
            return {
                routingResult: action.result,
                selectedPath: action.result.paths[0],
            }
        }
        return RouteStore.getInitialState()
    }

    private isStaleRequest(request: RoutingArgs) {
        // this could be probably written less tedious...
        const subRequests = this.queryStore.state.currentRequest.subRequests
        let requestIndex = -1
        let mostRecentAndFinishedIndex = -1
        for (let i = 0; i < subRequests.length; i++) {
            const element = subRequests[i]
            if (element.args === request) {
                requestIndex = i
            }
            if (element.state === RequestState.SUCCESS) {
                mostRecentAndFinishedIndex = i
            }
        }

        return requestIndex < 0 && requestIndex < mostRecentAndFinishedIndex
    }

    private static containsPaths(paths: Path[]) {
        return paths.length > 0
    }
}
