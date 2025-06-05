<script setup>
import { GoogleMap, Polyline, Marker } from 'vue3-google-map'
const apiKey = import.meta.env.VITE_Google_MAPS_API_KEY;



const flightPlanCoordinates = [
  { lat: 6.5244, lng: 3.3792 },      // Lagos, Nigeria
  { lat: 5.6037, lng: -0.1870 },     // Accra, Ghana
  { lat: 4.8156, lng: 7.0498 },      // Port Harcourt, Nigeria
  { lat: 0.3476, lng: 32.5825 },     // Kampala, Uganda 
  { lat: -1.2921, lng: 36.8219 },    // Nairobi, Kenya 
  { lat: -6.7924, lng: 39.2083 },    // Dar es Salaam,
  { lat: -15.3875, lng: 28.3228 },   // Lusaka, Zambia
  { lat: -17.8252, lng: 31.0335 },   // Harare, Zimbabwe
  { lat: -26.2041, lng: 28.0473 }    // Johannesburg, South Africa
]


let Atpoint = flightPlanCoordinates - 1
const center = flightPlanCoordinates[0]
const markerOptions = { position: Atpoint, title: 'San Francisco' }

const flightPath = {
  path: flightPlanCoordinates,
  geodesic: true,
  strokeColor: '#FF0000',
  strokeOpacity: 1.0,
  strokeWeight: 4,
}
</script>



<template>
  <GoogleMap :zoom="3" :center="center" :api-key="apiKey" class="w-full h-[80vh] md:h-[90vh] lg:h-screen">
    <Polyline :options="flightPath" />
    <Marker :options="markerOptions" />
  </GoogleMap>
</template>
