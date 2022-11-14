<template>
  <ul>
    <li :key="user.id" v-for="user in users">{{user.room}}: {{user.name}}</li>
  </ul>
</template>
<script>
import { API } from "aws-amplify";
import { listUsers } from "./graphql/queries";
//import {createUser} from "@/graphql/mutations";
//import { onCreateUser } from "./graphql/subscriptions";

export default {
  data() {
    return {
      users: []
    }
  },
  async created() {
    /*
    await API.graphql({
      query: createUser,
      variables: { input: {name: 'Heisenberg'} },
    });
    */

    API.graphql({
      query: listUsers,
    }).then(usersRes => this.users = usersRes.data.listUsers.items)
  }
}
</script>

<style></style>
