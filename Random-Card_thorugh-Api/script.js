

let main = document.querySelector("main")
async function loadEmployee() {
    try {
        const response = await fetch("https://randomuser.me/api/");

        if (!response.ok) {
            throw new Error("Unable to load employee data");
        }

        const { results } = await response.json();
        const employee = results;
        employee.forEach(user => {


            let card = document.createElement("div")
            card.innerHTML = ` <header class="card-header">
            <div class="brand">
                <div class="brand-mark" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 4h12v16H6z"></path>
                        <path d="M9 8h6M9 12h6M9 16h4"></path>
                    </svg>
                </div>
                <div class="brand-name">NEXORA<span>CORPORATION</span></div>
            </div>
            <div class="profile-photo">
                <img id="" src="${user.picture.large}" alt="Employee profile">
            </div>
        </header>

        <section class="card-body">
            <h1 class="employee-name" id="employeeName">${user.name.first} ${user.name.last}</h1>
            <p class="employee-role" id="employeeRole">Software Developer</p>
            <div class="employee-id">
                <span class="status-dot"></span>
                <span id="employeeId">ID: ${user.login.password}</span>
            </div>

            <div class="divider"></div>

            <div class="details">
                <div class="detail">
                    <div class="detail-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"/></svg>
                    </div>
                    <div>
                        <span class="detail-label">Email</span>
                        <span class="detail-value" id="employeeEmail">${user.email}</span>
                    </div>
                </div>

                <div class="detail">
                    <div class="detail-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/></svg>
                    </div>
                    <div>
                        <span class="detail-label">Location</span>
                        <span class="detail-value" id="employeeLocation">${user.location.timezone.description}</span>
                    </div>
                </div>

                <div class="detail">
                    <div class="detail-icon" aria-hidden="true">
                        <svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"/></svg>
                    </div>
                    <div>
                        <span class="detail-label">Phone</span>
                        <span class="detail-value" id="employeePhone">${user.phone}</span>
                    </div>
                </div>
            </div>

            <footer class="card-footer">
                <div class="validity">Valid through<strong>December 2028</strong></div>
                <div class="barcode" aria-label="Barcode">
                    <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                </div>
            </footer>
        </section>`

            main.appendChild(card)
        });
    } catch (error) {
        console.error(error);
        console.log(error);

    }
}

loadEmployee();
