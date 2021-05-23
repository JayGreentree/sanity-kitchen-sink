export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60aa8d7149457ec79fe3b10d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-7fsudc29',
                  apiId: '0fe61eb8-b149-4953-b9d5-cbffc085aa4c'
                },
                {
                  buildHookId: '60aa8d71a1f19fb8e538097b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-y6oewz12',
                  apiId: '6a1e589f-5c1d-4493-9d6c-aa121f24092e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JayGreentree/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-y6oewz12.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
