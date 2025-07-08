import { ref } from "vue";
import { defineStore } from "pinia";
import { token } from "@/utils";
import { getUserProfile } from "@/services";
import router from "@/router";

export const useAuthStore = defineStore("auth", () => {
  
  const user = ref({
    id: "",
    org_id: "",
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    profile_image: null,
    created_at: "",
    updated_at: "",
    is_active: false,
  });

  function setUser(data: any) {
    user.value = data;
  }

  const authenticateUser = async () => {
    try {
      if (token.getToken()) {
        const { data: response } = await getUserProfile();

        setUser(response.data);
        if (!response.data.has_onboarded) {
          router.push({
            name: "onboarding",
          });
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return { user, setUser, authenticateUser };
});
