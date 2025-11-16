# UsersApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**deleteUserByIdApiV1UsersUserIdDelete**](#deleteuserbyidapiv1usersuseriddelete) | **DELETE** /api/v1/users/{user_id} | Delete User By Id|
|[**getActiveUsersApiV1UsersActiveGet**](#getactiveusersapiv1usersactiveget) | **GET** /api/v1/users/active | Get Active Users|
|[**getAllUsersApiV1UsersAllGet**](#getallusersapiv1usersallget) | **GET** /api/v1/users/all | Get All Users|
|[**getDefaultUserPermissionsApiV1UsersDefaultPermissionsGet**](#getdefaultuserpermissionsapiv1usersdefaultpermissionsget) | **GET** /api/v1/users/default/permissions | Get Default User Permissions|
|[**getUserActiveStatusByIdApiV1UsersUserIdActiveGet**](#getuseractivestatusbyidapiv1usersuseridactiveget) | **GET** /api/v1/users/{user_id}/active | Get User Active Status By Id|
|[**getUserByIdApiV1UsersUserIdGet**](#getuserbyidapiv1usersuseridget) | **GET** /api/v1/users/{user_id} | Get User By Id|
|[**getUserGroupsApiV1UsersGroupsGet**](#getusergroupsapiv1usersgroupsget) | **GET** /api/v1/users/groups | Get User Groups|
|[**getUserGroupsByIdApiV1UsersUserIdGroupsGet**](#getusergroupsbyidapiv1usersuseridgroupsget) | **GET** /api/v1/users/{user_id}/groups | Get User Groups By Id|
|[**getUserInfoBySessionUserApiV1UsersUserInfoGet**](#getuserinfobysessionuserapiv1usersuserinfoget) | **GET** /api/v1/users/user/info | Get User Info By Session User|
|[**getUserOauthSessionsByIdApiV1UsersUserIdOauthSessionsGet**](#getuseroauthsessionsbyidapiv1usersuseridoauthsessionsget) | **GET** /api/v1/users/{user_id}/oauth/sessions | Get User Oauth Sessions By Id|
|[**getUserPermissisionsApiV1UsersPermissionsGet**](#getuserpermissisionsapiv1userspermissionsget) | **GET** /api/v1/users/permissions | Get User Permissisions|
|[**getUserProfileImageByIdApiV1UsersUserIdProfileImageGet**](#getuserprofileimagebyidapiv1usersuseridprofileimageget) | **GET** /api/v1/users/{user_id}/profile/image | Get User Profile Image By Id|
|[**getUserSettingsBySessionUserApiV1UsersUserSettingsGet**](#getusersettingsbysessionuserapiv1usersusersettingsget) | **GET** /api/v1/users/user/settings | Get User Settings By Session User|
|[**getUsersApiV1UsersGet**](#getusersapiv1usersget) | **GET** /api/v1/users/ | Get Users|
|[**searchUsersApiV1UsersSearchGet**](#searchusersapiv1userssearchget) | **GET** /api/v1/users/search | Search Users|
|[**updateDefaultUserPermissionsApiV1UsersDefaultPermissionsPost**](#updatedefaultuserpermissionsapiv1usersdefaultpermissionspost) | **POST** /api/v1/users/default/permissions | Update Default User Permissions|
|[**updateUserByIdApiV1UsersUserIdUpdatePost**](#updateuserbyidapiv1usersuseridupdatepost) | **POST** /api/v1/users/{user_id}/update | Update User By Id|
|[**updateUserInfoBySessionUserApiV1UsersUserInfoUpdatePost**](#updateuserinfobysessionuserapiv1usersuserinfoupdatepost) | **POST** /api/v1/users/user/info/update | Update User Info By Session User|
|[**updateUserSettingsBySessionUserApiV1UsersUserSettingsUpdatePost**](#updateusersettingsbysessionuserapiv1usersusersettingsupdatepost) | **POST** /api/v1/users/user/settings/update | Update User Settings By Session User|

# **deleteUserByIdApiV1UsersUserIdDelete**
> boolean deleteUserByIdApiV1UsersUserIdDelete()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.deleteUserByIdApiV1UsersUserIdDelete(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**boolean**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getActiveUsersApiV1UsersActiveGet**
> any getActiveUsersApiV1UsersActiveGet()

Get a list of active users.

### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.getActiveUsersApiV1UsersActiveGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getAllUsersApiV1UsersAllGet**
> UserInfoListResponse getAllUsersApiV1UsersAllGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.getAllUsersApiV1UsersAllGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UserInfoListResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getDefaultUserPermissionsApiV1UsersDefaultPermissionsGet**
> UserPermissions getDefaultUserPermissionsApiV1UsersDefaultPermissionsGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.getDefaultUserPermissionsApiV1UsersDefaultPermissionsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UserPermissions**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserActiveStatusByIdApiV1UsersUserIdActiveGet**
> { [key: string]: any; } getUserActiveStatusByIdApiV1UsersUserIdActiveGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getUserActiveStatusByIdApiV1UsersUserIdActiveGet(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**{ [key: string]: any; }**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserByIdApiV1UsersUserIdGet**
> OpenWebuiRoutersUsersUserResponse getUserByIdApiV1UsersUserIdGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getUserByIdApiV1UsersUserIdGet(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**OpenWebuiRoutersUsersUserResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserGroupsApiV1UsersGroupsGet**
> any getUserGroupsApiV1UsersGroupsGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.getUserGroupsApiV1UsersGroupsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserGroupsByIdApiV1UsersUserIdGroupsGet**
> any getUserGroupsByIdApiV1UsersUserIdGroupsGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getUserGroupsByIdApiV1UsersUserIdGroupsGet(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserInfoBySessionUserApiV1UsersUserInfoGet**
> { [key: string]: any; } getUserInfoBySessionUserApiV1UsersUserInfoGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.getUserInfoBySessionUserApiV1UsersUserInfoGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**{ [key: string]: any; }**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserOauthSessionsByIdApiV1UsersUserIdOauthSessionsGet**
> any getUserOauthSessionsByIdApiV1UsersUserIdOauthSessionsGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getUserOauthSessionsByIdApiV1UsersUserIdOauthSessionsGet(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserPermissisionsApiV1UsersPermissionsGet**
> any getUserPermissisionsApiV1UsersPermissionsGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.getUserPermissisionsApiV1UsersPermissionsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserProfileImageByIdApiV1UsersUserIdProfileImageGet**
> any getUserProfileImageByIdApiV1UsersUserIdProfileImageGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)

const { status, data } = await apiInstance.getUserProfileImageByIdApiV1UsersUserIdProfileImageGet(
    userId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUserSettingsBySessionUserApiV1UsersUserSettingsGet**
> UserSettings getUserSettingsBySessionUserApiV1UsersUserSettingsGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

const { status, data } = await apiInstance.getUserSettingsBySessionUserApiV1UsersUserSettingsGet();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**UserSettings**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getUsersApiV1UsersGet**
> UserListResponse getUsersApiV1UsersGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let query: string; // (optional) (default to undefined)
let orderBy: string; // (optional) (default to undefined)
let direction: string; // (optional) (default to undefined)
let page: number; // (optional) (default to undefined)

const { status, data } = await apiInstance.getUsersApiV1UsersGet(
    query,
    orderBy,
    direction,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] |  | (optional) defaults to undefined|
| **orderBy** | [**string**] |  | (optional) defaults to undefined|
| **direction** | [**string**] |  | (optional) defaults to undefined|
| **page** | [**number**] |  | (optional) defaults to undefined|


### Return type

**UserListResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **searchUsersApiV1UsersSearchGet**
> UserIdNameListResponse searchUsersApiV1UsersSearchGet()


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let query: string; // (optional) (default to undefined)

const { status, data } = await apiInstance.searchUsersApiV1UsersSearchGet(
    query
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **query** | [**string**] |  | (optional) defaults to undefined|


### Return type

**UserIdNameListResponse**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateDefaultUserPermissionsApiV1UsersDefaultPermissionsPost**
> any updateDefaultUserPermissionsApiV1UsersDefaultPermissionsPost(userPermissions)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    UserPermissions
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userPermissions: UserPermissions; //

const { status, data } = await apiInstance.updateDefaultUserPermissionsApiV1UsersDefaultPermissionsPost(
    userPermissions
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userPermissions** | **UserPermissions**|  | |


### Return type

**any**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserByIdApiV1UsersUserIdUpdatePost**
> UserModel updateUserByIdApiV1UsersUserIdUpdatePost(userUpdateForm)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    UserUpdateForm
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userId: string; // (default to undefined)
let userUpdateForm: UserUpdateForm; //

const { status, data } = await apiInstance.updateUserByIdApiV1UsersUserIdUpdatePost(
    userId,
    userUpdateForm
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userUpdateForm** | **UserUpdateForm**|  | |
| **userId** | [**string**] |  | defaults to undefined|


### Return type

**UserModel**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserInfoBySessionUserApiV1UsersUserInfoUpdatePost**
> { [key: string]: any; } updateUserInfoBySessionUserApiV1UsersUserInfoUpdatePost(requestBody)


### Example

```typescript
import {
    UsersApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let requestBody: { [key: string]: any; }; //

const { status, data } = await apiInstance.updateUserInfoBySessionUserApiV1UsersUserInfoUpdatePost(
    requestBody
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **requestBody** | **{ [key: string]: any; }**|  | |


### Return type

**{ [key: string]: any; }**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateUserSettingsBySessionUserApiV1UsersUserSettingsUpdatePost**
> UserSettings updateUserSettingsBySessionUserApiV1UsersUserSettingsUpdatePost(userSettings)


### Example

```typescript
import {
    UsersApi,
    Configuration,
    UserSettings
} from './api';

const configuration = new Configuration();
const apiInstance = new UsersApi(configuration);

let userSettings: UserSettings; //

const { status, data } = await apiInstance.updateUserSettingsBySessionUserApiV1UsersUserSettingsUpdatePost(
    userSettings
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **userSettings** | **UserSettings**|  | |


### Return type

**UserSettings**

### Authorization

[HTTPBearer](../README.md#HTTPBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful Response |  -  |
|**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

