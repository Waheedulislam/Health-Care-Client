import { IMeta } from '@/types';
import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi'

const schedulesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createSchedule: build.mutation({
            query: (data) => ({
                url: '/schedule',
                method: 'POST',
                data
            }),
            invalidatesTags: [tagTypes.schedule]
        }),
        getAllSchedules: build.query({
            query: (arg: Record<string, any>) => {
                return {
                    url: '/schedule',
                    method: 'GET',
                    params: arg,
                }
            },
            transformErrorResponse: (response: [], meta: IMeta) => {
                return {
                    schedules: response,
                    meta
                }
            },
            providesTags: [tagTypes.schedule],
        }),
        deleteSchedule: build.mutation({
            query: (id) => ({
                url: `/schedule/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [tagTypes.schedule],
        })
    })
})

export const {
    useCreateScheduleMutation,
    useGetAllSchedulesQuery,
    useDeleteScheduleMutation
} = schedulesApi;