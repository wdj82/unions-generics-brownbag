const view = {
  default: true,
  isAdmin: false,
  name: "default view",
};

function updateView(key: string, settings: any) {
  view[key] = settings;
}

updateView("isAdmin", true);
