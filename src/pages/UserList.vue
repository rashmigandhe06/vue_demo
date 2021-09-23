<template>
  <div>
    <h3 class="p-3 text-center">Users List</h3>
    <input v-model="filter" class="form-control" placeholder="Filter users by name or age">
    <table class="table">
      <thead slot="head">
      <tr>
        <th @click="sortBy('name')">Name</th>
        <th @click="sortBy('height')">Height</th>
        <th @click="sortBy('mass')">Mass</th>
        <th @click="sortBy('created')">Created</th>
        <th @click="sortBy('edited')">Updated</th>
        <th @click="sortBy('homeworld')">Planet</th>
      </tr>
      </thead>
      <tbody>
      <user-item v-for="user in sortedUsers" :key="user.id" :name="user.name" :height="user.height" :mass="user.mass"
                 :created="user.created" :edited="user.edited" :planet_url="user.homeworld"></user-item>
      </tbody>
    </table>
  </div>
  <spinner :loading="loading"></spinner>
</template>

<script>
import UserItem from "../components/UserItem.vue";
import Spinner from '../components/ui/Spinner.vue'
export default {
  components: {
    UserItem,
    Spinner
  },
  data() {
    return {
      sort: {
        key: '',
        isAsc: false
      },
      users: null,
      loading: false,
      success: 0,
      filter: '',
    }
  },

  computed: {




    filteredUsers() {
      return this.users.filter(c => {
        if (this.filter == '') return true;
        return c.name.toLowerCase().indexOf(this.filter.toLowerCase()) >= 0;
      })
    },



    sortedUsers() {
      const list = this.filteredUsers.slice();
      if (!!this.sort.key) {
        list.sort((a, b) => {
          a = a[this.sort.key]
          b = b[this.sort.key]

          return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1)
        });
      }
      return list;

    }
  },

  methods: {


    sortBy(key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
      this.sort.key = key;
    },
    sortedClass(key) {
      return this.sort.key === key ? `sorted ${this.sort.isAsc ? 'asc' : 'desc'}` : '';
    },



    listUsers() {
      this.loading = true;
      this.$store.dispatch('getUsers')
          .then(resp => {
            this.users = resp.data.results;

            if (resp.data != null) {
              this.success = 1;
              this.loading=false;

            } else {
              this.success = 0;
            }
          })
          .catch(error => {
            this.msg = error.message;
            this.success = 0;
          });
    },

  },

  created() {
    this.listUsers();
  }
}
</script>
