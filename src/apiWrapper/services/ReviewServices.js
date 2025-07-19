import axios from 'axios';
import {REVIEW_ENDPOINT} from '../apis/ReviewEndpoints';

export const addReview = async (payload) => {
    try {
        const response = await axios.post(REVIEW_ENDPOINT.addReview,payload, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to add review');
        }

       return response.data;
    } catch (error) {
        console.error('Error adding review:', error);
        throw error;
    }
}