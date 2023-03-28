<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid justify-content-end p-0">
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon top-bar"></span>
                <span class="navbar-toggler-icon bottom-bar"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="d-flex">
                    <button class="btn btn-dark me-2 search" type="button">
                        <img src="../assets/img/search.svg" alt="">
                    </button>
                    <input class="form-control " type="search" placeholder="Поиск казино, игр и многого другого...">
                </form>
                <div class="btn_list">
                    <select class="form-select">
                        <option value="rn" selected>Ru</option>
                        <option value="en">En</option>
                    </select>

                    <!-- Log in  -->
                    <router-link to="/" class="login btn-dark">Войти <img src="../assets/img/login.svg" alt=""></router-link>
                    <!-- registration -->
                    <router-link to="/" class="registration btn-dark">Регистрация <img src="../assets/img/registration.svg" alt=""></router-link>
                </div>

            </div>
        </div>
    </nav>
</template>

<script >

</script>