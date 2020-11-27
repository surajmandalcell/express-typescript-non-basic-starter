// Base

export const noExist = '404 Does not exist';

export const missingFields = '400 Missing Fields';

export const sendError = { success: 0, message: 'Error' }; // Default 500 status

export const sendSuccess = { success: 1, message: 'Success' };

// Auth related

export const noAuth = '401 Not Authorized';

// Data related falures

export const noData = '404 No Data';

export const noRecord = '404 No Record Found';

export const noDelete = '404 Failed to delete';

export const wrongType = '404 Wrong Search Type';

export const updateFailed = '404 Failed to update';

export const noDbConn = '500 DataBase Connection error';

export const dupEntry = "400 Can't Create, Data Already Exists";

export const badData = '400 Bad Request, provided data may be undefined';

// Success

export const updated = { success: 1, message: 'Updated' };

export const createSuccess = { success: 1, data: 'Created Succesfully' };

export const deleteSuccess = { success: 1, message: 'Deleted successfully' };

export const updateSuccess = { success: 1, message: 'Updated successfully' };
