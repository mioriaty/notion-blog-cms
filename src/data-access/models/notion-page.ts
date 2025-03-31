import { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export interface INotionPageResponse extends PageObjectResponse {
  properties: PageObjectResponse['properties'] & {
    Name: PageObjectResponse['properties']['Name'] & Record<string, any>;
    slug: PageObjectResponse['properties']['slug'] & Record<string, any>;
    banner_image: PageObjectResponse['properties']['banner_image'] & Record<string, any>;
    publish_date: PageObjectResponse['properties']['publish_date'] & Record<string, any>;
  };
}
