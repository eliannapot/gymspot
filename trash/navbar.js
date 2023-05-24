navbar=document.getElementById("navBar");
navbar.innerHTML = `<a class="navbar-brand" href="index.html">GymSpot</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="services.html">Services</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="programs.html">Programs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="admin.html">Admin </a>
                        </li>
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <button class="change-theme nav-button" id="theme-button">Night Mode</button>
                        </li>
                        <li class="nav-item">
                        <button class="nav-button" id="Log-in">Log in</button>
                        </li>
                    </ul>
                    </div>`