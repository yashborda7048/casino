<template>
    <div class="filter_section flex-column-reverse flex-lg-row">
        <div class="w-100">
            <div class="filter_tab">
                <button class="btn-primary filter_btn">Фильтр</button>
                <button class="btn-dark">Категории</button>
                <fieldset class="seleted ">
                    <button class="seleted navbar-toggler btn-dark" type="button" data-bs-toggle="collapse"
                        data-bs-target="#Content-1" aria-controls="Content-1" aria-expanded="false"
                        aria-label="Toggle navigation">
                        Провайдеры
                        <img src="../assets/img/rightarrow-icon.svg" class="seleted right-arrow" alt="">
                    </button>
                    <div class="seleted collapse navbar-collapse " id="Content-1">
                        <div class="d-flex flex-column align-items-start">
                            <div class="d-flex gap-3 ps-2 rowline">
                                <input type="checkbox" id="crazy_monkey" value="crazy_monkey" v-model="checkedNames">
                                <label for="crazy_monkey">Crazy Monkey</label>
                            </div>
                            <div class="d-flex gap-3 ps-2 rowline">
                                <input type="checkbox" id="lucky_coin" value="lucky_coin" v-model="checkedNames">
                                <label for="lucky_coin">Lucky Coin</label>
                            </div>
                            <div class="d-flex gap-3 ps-2 rowline">
                                <input type="checkbox" id="book_of_gold" value="book_of_gold" v-model="checkedNames">
                                <label for="book_of_gold">Book Of Gold</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="row" id="card_container">
                <div class="col-6 col-md-4 col-lg-3 " v-for="item in game_list" :key="item.img">
                    <div class="game_card">
                        <img :src="get_img(item.img)" alt="">
                        <div class="card_body">
                            <h5 class="card_title">{{ item.title }}</h5>
                            <p class="card_sub_title">{{ item.sub_title }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex-grow-1 right_bar">
            <div class="right_bar_card">
                <h4 class="heading">Высокий бонус 🤑</h4>
                <div class="list_table">
                    <div class="table_row">
                        <div class="d-flex align-items-center">
                            <img src="../assets/img/stay_casino.svg" alt="">
                            <p class="table_head">Stay Casino 😝</p>
                        </div>
                        <button class="btn-primary">$1550</button>
                    </div>
                    <div class="table_row">
                        <div class="d-flex align-items-center">
                            <img src="../assets/img/fight_club.svg" alt="">
                            <p class="table_head">FightClub 🐯</p>
                        </div>
                        <button class="btn-primary">$1520</button>
                    </div>
                    <div class="table_row">
                        <div class="d-flex align-items-center">
                            <img src="../assets/img/pledoo.svg" alt="">
                            <p class="table_head">PleDoo 🎪</p>
                        </div>
                        <button class="btn-primary">$1415</button>
                    </div>
                    <div class="table_row">
                        <div class="d-flex align-items-center">
                            <img src="../assets/img/blue_leo.svg" alt="">
                            <p class="table_head">BlueLeo 🎠</p>
                        </div>
                        <button class="btn-primary">$1400</button>
                    </div>
                    <div class="table_row">
                        <div class="d-flex align-items-center">
                            <img src="../assets/img/golden_crown.svg" alt="">
                            <p class="table_head">Goldencrown ✨</p>
                        </div>
                        <button class="btn-primary">$1320</button>
                    </div>
                    <div class="table_row">
                        <div class="d-flex align-items-center">
                            <img src="../assets/img/spain_samurai.svg" alt="">
                            <p class="table_head">SpinSamurai 👘</p>
                        </div>
                        <button class="btn-primary">$1125</button>
                    </div>
                </div>
            </div>
            <div class="right_bar_card mt-40">
                <h4 class="heading">Выбор редакции 😎</h4>
                <div class="list_table">
                    <div class="table_row">
                        <div class="d-flex align-items-center">
                            <img src="../assets/img/casinoberilia.svg" alt="">
                            <p class="table_head">CasinoBerilia 🤑</p>
                        </div>
                        <button class="btn-primary">Зайти</button>
                    </div>
                    <div class="table_row">
                        <div class="d-flex align-items-center">
                            <img src="../assets/img/fight_club.svg" alt="">
                            <p class="table_head">JooCasino 🐬</p>
                        </div>
                        <button class="btn-primary">Зайти</button>
                    </div>
                    <div class="table_row">
                        <div class="d-flex align-items-center">
                            <img src="../assets/img/pledoo.svg" alt="">
                            <p class="table_head">BitCasino 🎄 </p>
                        </div>
                        <button class="btn-primary">Зайти</button>
                    </div>
                    <div class="table_row">
                        <div class="d-flex align-items-center">
                            <img src="../assets/img/blue_leo.svg" alt="">
                            <p class="table_head">HellSpin 🔥</p>
                        </div>
                        <button class="btn-primary">Зайти</button>
                    </div>
                    <div class="table_row">
                        <div class="d-flex align-items-center">
                            <img src="../assets/img/golden_crown.svg" alt="">
                            <p class="table_head">Goldencrown ✨</p>
                        </div>
                        <button class="btn-primary">Зайти</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkedNames: [],
            game_list: [
                {
                    img: 'crazy_monkey.svg',
                    title: 'Crazy Monkey',
                    sub_title: 'Рекомендовано',
                    search: 'crazy_monkey'
                },
                {
                    img: 'lucky_coin.svg',
                    title: 'Lucky Coin',
                    sub_title: 'Рекомендовано',
                    search: 'lucky_coin'
                },
                {
                    img: 'book_of_gold.svg',
                    title: 'Book Of Gold',
                    sub_title: 'Рекомендовано',
                    search: 'book_of_gold'
                },
                {
                    img: 'haunted_money.svg',
                    title: 'Haunted Money',
                    sub_title: 'Рекомендовано',
                    search: 'haunted_money'
                },
                {
                    img: 'vegas_night.svg',
                    title: 'vegas Night',
                    sub_title: 'Рекомендовано',
                    search: 'vegas_night'
                },
                {
                    img: 'crazy_monkey.svg',
                    title: 'Crazy Monkey',
                    sub_title: 'Рекомендовано',
                    search: 'crazy_monkey'
                },
                {
                    img: 'thunder_zeus.svg',
                    title: 'Thunder Zeus',
                    sub_title: 'Рекомендовано',
                    search: 'thunder_zeus'
                },
                {
                    img: 'fruit_cocktak.svg',
                    title: 'Fruit Cocktak',
                    sub_title: 'Рекомендовано',
                    search: 'fruit_cocktak'
                },
                {
                    img: 'crazy_monkey.svg',
                    title: 'Crazy Monkey',
                    sub_title: 'Рекомендовано',
                    search: 'crazy_monkey'
                },
                {
                    img: 'lucky_coin.svg',
                    title: 'Lucky Coin',
                    sub_title: 'Рекомендовано',
                    search: 'lucky_coin'
                },
                {
                    img: 'book_of_gold.svg',
                    title: 'Book Of Gold',
                    sub_title: 'Рекомендовано',
                    search: 'book_of_gold'
                },
                {
                    img: 'haunted_money.svg',
                    title: 'Haunted Money',
                    sub_title: 'Рекомендовано',
                    search: 'haunted_money'
                },
            ]
        }
    },
    methods: {
        get_img(image) {
            return require("../assets/img/" + image)
        },
    }
}
</script>