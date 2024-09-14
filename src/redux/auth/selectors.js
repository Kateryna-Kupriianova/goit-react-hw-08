
// Селектор для отримання стану авторизації
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

// Селектор для отримання поточного користувача
export const selectUser = (state) => state.auth.user;

// Селектор для отримання токену
export const selectToken = (state) => state.auth.token;

// Селектор для перевірки стану оновлення користувача
export const selectIsRefreshing = (state) => state.auth.isRefreshing;
