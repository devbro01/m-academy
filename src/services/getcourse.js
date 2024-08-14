import axios from 'axios'

export const getCourse = async id => {
	try {
		const response = await axios.get(`http://localhost:1337/api/courses?populate=%2A`)
		return response.data
	} catch (error) {
		console.error('Error fetching course:', error)
	}
}
