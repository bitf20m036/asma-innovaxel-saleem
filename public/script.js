const apiBaseUrl = "http://localhost:5001";

async function callApi() {
    const apiType = document.getElementById("apiSelect").value;
    const inputField = document.getElementById("inputField").value;
    let response;

    try {
        switch (apiType) {
            case "generate":
                response = await fetch(`${apiBaseUrl}/shorten`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ url: inputField }),
                });
                break;
            case "get":
                response = await fetch(`${apiBaseUrl}/shorten/${inputField}`);
                if (!response.ok) {
                    // Handle the case where the short URL does not exist
                    document.getElementById("responseOutput").textContent = `Error: Short URL not found (Status ${response.status})`;
                    return;
                }
                const data = await response.json();

                if (response.ok && data.url) {
                    // Redirect to the original URL
                    window.location.href = data.url;
                    return;
                }
                break;
            case "update":
                response = await fetch(`${apiBaseUrl}/shorten/${inputField}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ url: prompt("Enter new URL:") }),
                });
                break;
            case "delete":
                response = await fetch(`${apiBaseUrl}/shorten/${inputField}`, {
                    method: "DELETE",
                });
            
                // DELETE usually has no response body, so don't parse as JSON
                if (response.ok) {
                    document.getElementById("responseOutput").textContent = "Short URL deleted!";
                } else {
                    const errorText = await response.text(); // Read response as text
                    document.getElementById("responseOutput").textContent = `Error: ${errorText || "Unknown error"}`;
                }
                return; // Prevent further JSON parsing
            case "stats":
                response = await fetch(`${apiBaseUrl}/shorten/${inputField}/stats`);
                if (!response.ok) {
                    document.getElementById("responseOutput").textContent = `Error: Short URL not found (Status ${response.status})`;
                    return;
                }
                break;
            default:
                throw new Error("Invalid API selection");
        }

        const data = await response.json();
        document.getElementById("responseOutput").textContent = JSON.stringify(data, null, 2);
    } catch (error) {
        document.getElementById("responseOutput").textContent = `Error: ${error.message}`;
    }
}
