const getProfiles = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/profiles`)
    return res.json()
  } catch (e) {
    throw Error(e.message ?? 'error fetching profiles')
  }
}

export { getProfiles }
