export const API_V1 : String = "http://localhost:9000/mimiapi/v1"
export const HTTP_STATUS_OK : number = 200;
export const HTTP_STATUS_CREATED : number = 201;
export const HTTP_STATUS_NO_CONTENT : number = 204;
export const HTTP_STATUS_INTERNAL_SERVER_ERROR : number = 500;
export const HTTP_STATUS_NOT_FOUND : number = 404;
export const HTTP_STATUS_FORBIDDEN : number = 403;

export const SIDEBAR_MENUS : any = [
    {
        id:"1",
        title:"Dashboard",
        link:"/dashboard",
    },
    {
        id:"2",
        title:"Planner",
        link:"/planner",
    },
    {
        id:"3",
        title:"Payment",
        link:"/payment",
    }
];