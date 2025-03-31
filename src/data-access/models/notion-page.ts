import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export interface INotionPageResponse extends PageObjectResponse {
  properties: PageObjectResponse['properties'] & {
    Name: PageObjectResponse['properties']['Name'] & Record<string, any>;
    slug: PageObjectResponse['properties']['slug'] & Record<string, any>;
    banner_image: PageObjectResponse['properties']['banner_image'] & Record<string, any>;
    published_date: PageObjectResponse['properties']['published_date'] & Record<string, any>;
    short_desc: PageObjectResponse['properties']['short_desc'] & Record<string, any>;
    tags: PageObjectResponse['properties']['tags'] & Record<string, any>;
  };
}
