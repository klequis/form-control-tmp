export const keyUpdateFormField = 'keyUpdateFormField'

export const updateFormField = (fieldId, fieldName, fieldValue) => {
  return ({
    type: keyUpdateFormField,
    payload: {
      fieldId,
      fieldName,
      fieldValue,
    }
  })
}
