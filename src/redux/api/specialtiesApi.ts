import { baseApi } from "./baseApi";

const specialties = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createSpecialties: build.mutation({
            query: (data) => ({
                url: '/specialties',
                method: 'POST',
                contentType: 'multipart/form-data',
                data,
            })
        })
    }),
    overrideExisting: false,
});

export const { useCreateSpecialtiesMutation } = specialties;