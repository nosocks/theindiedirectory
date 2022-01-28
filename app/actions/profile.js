const getProfiles = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/profiles`)
    return res.json()
  } catch (e) {
    throw Error('Unable to fetch profiles data.')
  }
}

export { getProfiles }
