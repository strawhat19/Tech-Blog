$(`#login-form`).bootstrapValidator();

$(`#login-form`).submit(async (evt) => {
    evt.preventDefault();
    const email = document.querySelector(`#user-email`).value
    const password = document.querySelector(`#user-password`).value

    try {
       const response = await fetch(`/api/login`, {
        method: `POST`,
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            console.log(response);
            document.location.replace(`/dashboard`)
        } else {
            console.log(response)
            window.alert(response.statusText)
        }
    } catch (e) {
        window.alert(`Login Failed`)
    }
});

async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector(`#user-user-name`).value.trim();
    const email = document.querySelector(`#user-email`).value.trim();
    const password = document.querySelector(`#user-password`).value.trim();

    if (username && email && password) {
        const response = await fetch(`/api/register`, {
            method: `post`,
            body: JSON.stringify({
                email,
                password,
                username,
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            alert(`Account created! Logging you in now.`);
            document.location.replace(`/dashboard`);
        } else {
            alert(response.statusText)
        }
    }
}

document.querySelector(`.signup-form`).addEventListener(`submit`, signupFormHandler);