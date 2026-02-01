export async function apiFetch(url,options = {}) {
    const token = localStorage.getItem("jwt");

    const response = await fetch(url,{
        ... options,
        headers:{
            ...apiFetch(options.headers || {}),
            Authorization: token ? `Bearer ${token}` : ""
        }
    });

    if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        window.location.href("/login");
    }

    return response;
}