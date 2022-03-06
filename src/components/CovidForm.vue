<template>
  <div>
    <div>
      <h4 class="text-center" id="header">CSMJU Covid form</h4>
    </div>
    <q-card class="my-card text-white">
      <q-card-section>
        <div>
          <q-input v-model="date" filled type="date" />
        </div>
        <div class="q-mt-sm">
          <q-input filled v-model="newName" label="Name" />
        </div>
        <div>
          <div class="q-mt-sm">
            <q-select
              label="Flip up/down"
              transition-show="flip-up"
              transition-hide="flip-down"
              filled
              v-model="newATK"
              :options="options"
            />
          </div>
          <div class="q-mt-sm" style="width: 400px">
            <q-input
              standout
              v-model="newEmail"
              type="email"
              prefix="Email:"
              suffix="@gmail.com"
            >
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>
          </div>
          <div class="q-mt-sm">
            <q-input
              v-model="newTel"
              filled
              type="tel"
              label="Phone number"
              :rules="[
                (val) =>
                  (val.length <= 10 && val.length > 0) ||
                  'Please use your phone number 10 number',
              ]"
            />
          </div>
        </div>
      </q-card-section>
      <q-separator dark />
    </q-card>
    <div>
      <div class="flex justify-center">
        <q-btn
          color="grey-4"
          text-color="purple"
          glossy
          unelevated
          icon="navigation"
          label="Add data"
          class="q-mr-md q-mt-md"
          @click="addData()"
        />
        <q-btn
          color="grey-4"
          text-color="purple"
          glossy
          unelevated
          icon="directions"
          label="Read Data"
          class="q-mr-md q-mt-md"
          @click="readData()"
        />
      </div>
    </div>
  </div>

  <div class="q-pa-md">
    <table>
      <tr>
        <th>Date</th>
        <th>Name</th>
        <th>ATK</th>
        <th>Email</th>
        <th>Phone</th>
      </tr>
      <tr v-for="(item, index) in CSMJUC" :key="index">
        <td>{{ item.date }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.atk }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.tel }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from "firebase/firestore";
import db from "../plugins/firebaseInit.js";
export default {
  data() {
    return {
      CSMJUC: [],
      date: "",
      newName: "",
      newATK: "",
      newEmail: "",
      newTel: "",
      options: ["Positive", "Negative"],
    };
  },
  methods: {
    async addData() {
      try {
        const docRef = await addDoc(collection(db, "uscsmju"), {
          date: this.date,
          name: this.newName,
          atk: this.newATK,
          email: this.newEmail,
          tel: this.newTel,
        });
        this.date = "";
        this.newName = "";
        this.newATK = "";
        this.newEmail = "";
        this.newTel = "";
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async readData() {
      const querySnapshot = await getDocs(collection(db, "uscsmju"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id + 1} => ${doc.data()}`);
        this.CSMJUC.push(doc.data());
      });
    },
  },
};
</script>

<style>
table,
th,
td {
  border: 1px solid blueviolet;
}
th,
td {
  width: 400px;
}
#header {
  background: linear-gradient(120deg, #111, #555);
  color: rgb(31, 223, 230);
}
</style>
