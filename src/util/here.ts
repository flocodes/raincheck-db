import axios from 'axios'

const API_KEY = process.env.HERE_API_KEY || 'INVALID_API_KEY'
if (API_KEY === 'INVALID_API_KEY') {
  throw new Error('Environment variable "HERE_API_KEY" must be set.')
}

interface Location {
  lat: number
  lon: number
  label?: string
  number?: number
  street?: string
  city?: string
  country?: string
}

// Perform forward geocoding for the provided query using HERE Maps
// Only retrieve one result, return null if geocoding is unsuccessful
export async function fwdGeocode (query: string) {
  try {
    const response = await axios.get(
      'https://geocoder.ls.hereapi.com/6.2/geocode.json', {
        params: {
          apiKey: API_KEY,
          searchText: query,
          maxresults: 5
        }
      }
    )
    if (response.status !== 200) {
      console.log(`Request failed (status ${response.status}): ${response.data}`)
      return null
    }
    const views = response.data.Response.View
    if (!views || views.length === 0) {
      console.log(`Could not geocode ${query}: No views in response`)
      return null
    }
    const results = response.data.Response.View[0].Result
    if (!results || results.length === 0) {
      console.log(`Could not geocode ${query}: No results in response`)
      return null
    }
    console.log(`Found ${results.length} results for query ${query}`)
    return results.map((result: any) => extractDetails(result))
  } catch (error) {
    console.log(`Could not geocode "${query}": ${error}`)
    return null
  }
}

// Perform reverse geocoding for the provided latitude and longitude using HERE Maps
// Only retrieve one result, return null if geocoding is unsuccessful
export async function revGeocode (lat: number, lon: number) {
  try {
    const response = await axios.get(
      'https://reverse.geocoder.ls.hereapi.com/6.2/reversegeocode.json', {
        params: {
          apiKey: API_KEY,
          mode: 'retrieveAddresses',
          prox: `${lat},${lon},100`,
          maxresults: 1
        }
      }
    )
    const views = response.data.Response.View
    if (!views || views.length === 0) {
      console.log(`Could not reverse geocode ${lat}/${lon}: No views in response`)
      return null
    }
    const results = response.data.Response.View[0].Result
    if (!results || results.length === 0) {
      console.log(`Could not reverse geocode ${lat}/${lon}: No results in response`)
      return null
    }
    console.log(`Found ${results.length} results for ${lat}/${lon}`)
    const result = results[0]
    return extractDetails(result)
  } catch (error) {
    console.log(`Could not reverse geocode ${lat}/${lon}: ${error}`)
    return null
  }
}

function extractDetails (result: any) {
  const matchLevel = result.MatchLevel
  const ret: Location = {
    lat: result.Location.DisplayPosition.Latitude,
    lon: result.Location.DisplayPosition.Longitude,
    label: result.Location.Address.Label
  }
  if (matchLevel === 'houseNumber') ret.number = result.Location.Address.HouseNumber
  if (['houseNumber', 'street'].some((e) => e === matchLevel)) ret.street = result.Location.Address.Street
  if (['houseNumber', 'street', 'city'].some((e) => e === matchLevel)) ret.city = result.Location.Address.City
  if (['houseNumber', 'street', 'city', 'country'].some((e) => e === matchLevel)) ret.country = result.Location.Address.Country
  return ret
}
