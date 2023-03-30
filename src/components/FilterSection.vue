<template>
    <div class="filter_section flex-column-reverse flex-lg-row">
        <div class="w-100">
            <div class="filter_tab">
                <button class="btn-primary filter_btn">Фильтр <span
                        :class="toggleFilter.length == 0 ? 'd-none' : 'd-inline-block'">({{ toggleFilter.length
                        }})</span></button>
                <button class="btn-dark">Категории</button>
                <fieldset class="seleted ">
                    <button class="seleted navbar-toggler btn-dark" type="button" data-bs-toggle="collapse"
                        data-bs-target="#Content-1" aria-controls="Content-1" aria-expanded="false"
                        aria-label="Toggle navigation">
                        Провайдеры
                        <img src="../assets/img/rightarrow-icon.svg" class="seleted right-arrow" alt="">
                    </button>
                    <div class="seleted collapse navbar-collapse " id="Content-1">
                        <div class="d-flex flex-column align-items-start" v-for="filter in Filter_list"
                            :key="filter.search">
                            <div class="d-flex gap-3 ps-2 rowline">
                                <input type="checkbox" :id="filter.search" :value="filter.search" v-model="toggleFilter"
                                    @change="showFilter()">
                                <label :for="filter.search">{{ filter.title }}</label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
            <div class="row" id="card_container" v-if="alldata">
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
            <div class="row" id="card_container" v-else>
                <div class="col-6 col-md-4 col-lg-3 " v-for="item in result" :key="item.img">
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
import data from '../json/data.json'

export default {
    data() {
        return {
            toggleFilter: [],
            Filter_list: '',
            game_list: data,
            result: null,
            alldata: true
        }
    },
    methods: {
        get_img(image) {
            return require("../assets/img/" + image)
        },
        filterListFn() {
            this.Filter_list = data.reduce((accumulator, current) => {
                if (!accumulator.find(item => item.search === current.search)) {
                    accumulator.push(current);
                }
                return accumulator;
            }, []);
        },
        showFilter() {
            this.alldata = false;

            this.result = data.filter((obj1) => {
                return this.toggleFilter.some((obj2) => {
                    return obj1.search === obj2
                })
            });

            console.log(this.result, 'result');
            if (this.result.length == 0) {
                this.alldata = true;
            }
        }
    },
    mounted() {
        this.filterListFn();
    }
}
</script>