async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector(`input[name="blog-title"]`).value;
    const content = document.querySelector(`textarea[name="blogContent"]`).value;

    const response = await fetch(`/blogs`, {
      method: `POST`,
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert(response.statusText);
    }
  }
  
document.querySelector(`#blog-form`).addEventListener(`submit`, newFormHandler);