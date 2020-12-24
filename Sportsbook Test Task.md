# Sportsbook Test Task

## Requirements
The main task is to implement the login flow. The application must have two routes:
* "Login" - `/login`
* "Home" - `/`

Implement login form in "Login" screen containing the following elements:
1. Username field
2. Password field
3. Submission button

Once login is successful, save auth token to local storage and redirect to "Home" screen. If a user attempts to visit "Home" screen unauthorized, redirect to "Login" screen.  "Unauthorized" means that there is no auth token available.

Display loading state, error state. For the error state use the error message from `POST /auth/login` endpoint (`message` field in the response JSON).

Use the following user for logging in:
```
{
  "username": "fetest@email.com",
  "password": "Good@Luck1"
}
```
The `two_factor_auth_code` field in `POST /auth/login` request should be omitted.

For UI implementation, use any UI library you like, unless it looks consistent and neat. Ant Design React library might be used as an option. It is simple, looks nice and has everything you need to build a well done layout.

## REST API
[Swagger UI: POST /auth/login](https://boapi.tlibom.com/core/swagger-ui.html#/auth-controller/loginUsingPOST)

## Tech stack
* React
* Redux
* Redux-Saga
* Typescript (optional, is a plus)
* Unit-testing (optional, is a plus)
* [Ant Design](https://ant.design/components/overview/) (optional)

Please use any `eslint` styleguide you like. Try to be sequential in your commits.
