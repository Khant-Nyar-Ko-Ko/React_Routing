import { RouteObject } from "react-router-dom";
import ExpertMenu from "../pages/expert/ExpertMenu";
import ExpertLayout from "../layouts/ExpertLayout";
import One from "../pages/expert/One";
import Two from "../pages/expert/Two";

const ExpertRouter : RouteObject[] = [
    {
        path: '/expert/',
        element: <ExpertLayout/>,
        children: [
            {
                path:'menu',
                element: <ExpertMenu/>,
                children: [
                    {
                        path: 'one',
                        element: <One/>
                    },
                    {
                        path: 'two',
                        element: <Two/>
                    }
                ]
            }
        ]
    }
]

export default ExpertRouter;