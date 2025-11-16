# LdapServerConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **string** |  | [default to undefined]
**host** | **string** |  | [default to undefined]
**port** | **number** |  | [optional] [default to undefined]
**attribute_for_mail** | **string** |  | [optional] [default to 'mail']
**attribute_for_username** | **string** |  | [optional] [default to 'uid']
**app_dn** | **string** |  | [default to undefined]
**app_dn_password** | **string** |  | [default to undefined]
**search_base** | **string** |  | [default to undefined]
**search_filters** | **string** |  | [optional] [default to '']
**use_tls** | **boolean** |  | [optional] [default to true]
**certificate_path** | **string** |  | [optional] [default to undefined]
**validate_cert** | **boolean** |  | [optional] [default to true]
**ciphers** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { LdapServerConfig } from './api';

const instance: LdapServerConfig = {
    label,
    host,
    port,
    attribute_for_mail,
    attribute_for_username,
    app_dn,
    app_dn_password,
    search_base,
    search_filters,
    use_tls,
    certificate_path,
    validate_cert,
    ciphers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
