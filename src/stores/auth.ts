import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios';
import { token } from '@/utils';

export const useAuthStore = defineStore('auth', () => {
    const user = ref({
        "id": "",
        "org_id": "",
        "username": "",
        "first_name": "",
        "last_name": "",
        "email": "",
        "profile_image": null,
        "created_at": "",
        "updated_at": "",
        "is_active": false
    })

    function setUser(data: any) {
        user.value = data;
    }

    const authenticateUser = async () => {
        try {
            if (token.getToken()) {
                const response = await axios.get((`${import.meta.env.VITE_API_BASE_URL}users/me`), {
                    headers: { 
                        Authorization: `Bearer ${token.getToken()}`
                    }
                })
                // console.log(response.data);
                setUser(response.data.data);
            }
        } catch (error) {
            console.error("Error fetching user data:", error);

        }
    }
    return { user, setUser, authenticateUser }
})
