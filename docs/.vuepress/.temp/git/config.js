import { GitContributors } from "C:/Users/TOTAL TECH/Desktop/New folder/zeravan/profile/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "C:/Users/TOTAL TECH/Desktop/New folder/zeravan/profile/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
