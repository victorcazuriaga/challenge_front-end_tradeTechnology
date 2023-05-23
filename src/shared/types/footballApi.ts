export interface AxiosStatusResponse {
    data: StatusResponse
}
export interface StatusResponse {
    get: string
    parameters: any[]
    errors: any[]
    results: number
    response: Response
}

export interface Response {
    account: Account
    subscription: Subscription
    requests: Requests
}

export interface Account {
    firstname: string
    lastname: string
    email: string
}

export interface Subscription {
    plan: string
    end: string
    active: boolean
}

export interface Requests {
    current: number
    limit_day: number
}
