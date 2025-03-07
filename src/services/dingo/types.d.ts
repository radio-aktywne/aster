/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = {
  "/ping": {
    delete?: never;
    /**
     * Ping
     * @description Do nothing.
     */
    get: {
      parameters: {
        cookie?: never;
        header?: never;
        path?: never;
        query?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Request fulfilled, nothing follows */
        204: {
          content?: never;
          headers: {
            [name: string]: unknown;
            "Cache-Control"?: string;
          };
        };
      };
    };
    head?: never;
    options?: never;
    parameters: {
      cookie?: never;
      header?: never;
      path?: never;
      query?: never;
    };
    patch?: never;
    post?: never;
    put?: never;
    trace?: never;
  };
  "/playlist": {
    delete?: never;
    /**
     * Get playlist data
     * @description Get the current playlist data.
     */
    get: {
      parameters: {
        cookie?: never;
        header?: never;
        path?: never;
        query?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Request fulfilled, document follows */
        200: {
          content: {
            "application/json": components["schemas"]["GetPlaylistResponse"];
          };
          headers: {
            [name: string]: unknown;
          };
        };
        /** @description Request failed, resource not found */
        404: {
          content: {
            "text/plain": string;
          };
          headers: {
            [name: string]: unknown;
          };
        };
      };
    };
    head?: never;
    options?: never;
    parameters: {
      cookie?: never;
      header?: never;
      path?: never;
      query?: never;
    };
    patch?: never;
    post?: never;
    /**
     * Update playlist data
     * @description Update the current playlist data.
     */
    put: {
      parameters: {
        cookie?: never;
        header?: never;
        path?: never;
        query?: never;
      };
      requestBody: {
        content: {
          "application/json": components["schemas"]["PutPlaylistRequest"];
        };
      };
      responses: {
        /** @description Request fulfilled, document follows */
        200: {
          content: {
            "application/json": components["schemas"]["PutPlaylistResponse"];
          };
          headers: {
            [name: string]: unknown;
          };
        };
        /** @description Bad request syntax */
        400: {
          content: {
            "text/plain": string;
          };
          headers: {
            [name: string]: unknown;
          };
        };
      };
    };
    trace?: never;
  };
};
export type webhooks = { [key: string]: never };
export type components = {
  headers: never;
  parameters: never;
  pathItems: never;
  requestBodies: never;
  responses: never;
  schemas: {
    GetPlaylistResponse: {
      /**
       * Format: uuid
       * @example 123e4567-e89b-12d3-a456-426614174000
       */
      id: string;
    };
    PutPlaylistRequest: {
      /**
       * Format: uuid
       * @example 123e4567-e89b-12d3-a456-426614174000
       */
      id: string;
    };
    PutPlaylistResponse: {
      /**
       * Format: uuid
       * @example 123e4567-e89b-12d3-a456-426614174000
       */
      id: string;
    };
  };
};
export type $defs = { [key: string]: never };
export type operations = { [key: string]: never };
