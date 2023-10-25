const view = {
  default: true,
  isAdmin: false,
  name: "default view",
};

type View = typeof view;

function updateView<K extends keyof View>(key: K, settings: View[K]) {
  view[key] = settings;
}

updateView("isAdmin", true);
