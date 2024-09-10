export const labels = {
  toasts: {
    titles: {
      error: "Error",
      warning: "Warning",
      success: "Success",
      info: "Info",
    },
  },
  pages: {
    index: {
      title: "webfuse",
      description: "webfuse",
    },
    notFound: {
      title: "Not Found • webfuse",
      description: "webfuse",
      text: "Page not found",
    },
    error: {
      title: "Error • webfuse",
      description: "webfuse",
      text: "Something went wrong",
      buttons: {
        retry: {
          label: "Retry",
        },
      },
    },
  },
  widgets: {
    main: {
      form: {
        fields: {
          playlist: {
            title: "Playlist",
            option: (id: string) => `${id}`,
            errors: {
              missing: "Playlist is required",
            },
          },
        },
        buttons: {
          save: {
            label: "Save",
          },
        },
      },
      toasts: {
        update: {
          playlist: {
            success: "Playlist updated",
            error: "Failed to update playlist",
          },
        },
      },
    },
  },
};
