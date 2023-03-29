<template>
    <div class="left_menu">
        <router-link to="/" class="btn-primary logo" aria-current="page">
            <img src="../assets/img/logo.svg" alt="">
        </router-link>
        <ul class="menu_list navbar-nav">
            <li class="nav-item">
                <router-link to="/online_casinos" class="nav-link" aria-current="page">
                    <img src="../assets/img/online_casinos_icon.svg" alt="">
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/games" class="nav-link" aria-current="page">
                    <img src="../assets/img/games.svg" alt="">
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/bonuses" class="nav-link" aria-current="page">
                    <img src="../assets/img/bonuses.svg" alt="">
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/guides" class="nav-link" aria-current="page">
                    <img src="../assets/img/guides.svg" alt="">
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/complaints" class="nav-link" aria-current="page">
                    <img src="../assets/img/complaints.svg" alt="">
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/user_reviews" class="nav-link" aria-current="page">
                    <img src="../assets/img/user_reviews.svg" alt="">
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/news" class="nav-link" aria-current="page">
                    <img src="../assets/img/news.svg" alt="">
                </router-link>
            </li>
        </ul>

        <ul class="favorite_list mt-4 mb-0">
            <button class="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse"
                data-bs-target="#account-collapse" aria-expanded="false">
                <img src="../assets/img/star.svg" alt="">
            </button>
            <div class="collapse show" id="account-collapse">
                <ul class="favorite_list">
                    <li>
                        <div>
                            <router-link to="/casino_1" class="" aria-current="page">
                                <img src="../assets/img/casino_1.svg" alt="">
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <router-link to="/casino_2" class="" aria-current="page">
                                <img src="../assets/img/casino_2.svg" alt="">
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <router-link to="/casino_3" class="" aria-current="page">
                                <img src="../assets/img/casino_3.svg" alt="">
                            </router-link>
                        </div>
                    </li>
                    <li>
                        <div class="plus_border">
                            <router-link to="/casino_4" class="" aria-current="page">
                                <img src="../assets/img/plus.svg" alt="">
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </ul>

        <router-link to="/logout" class="logout" aria-current="page">
            <img src="../assets/img/log_out.svg" alt="">
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Menu'
}
</script>
