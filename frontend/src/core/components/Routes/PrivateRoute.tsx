import { Route, Redirect } from 'react-router-dom';
import { isAllowedByRole, isAuthenticated, Role } from '../../../core/utils/auth';

type Props = {
    children: React.ReactNode;
    path: string;
    allowedRoutes?: Role[];
}

const PrivateRoute = ({ children, path, allowedRoutes }: Props) => {
    return (
        <Route
            path={path}
            render={({ location }) => {
                if (!isAuthenticated()) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: { from: location }
                            }}
                        />
                    )
                } else if (isAuthenticated() && !isAllowedByRole(allowedRoutes)) {
                    return (
                        <Redirect to={{ pathname: "/" }} />
                    )
                }
                return children
            }}
        />
    );
}

export default PrivateRoute;
