export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5e716baedf731f02dcb59db9',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-gxjd8ova',
                  apiId: 'b03786cd-bf53-4e69-9341-b6c39f55f03f'
                },
                {
                  buildHookId: '5e716bae6d5e25ce2bd79b61',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-h8ao4xeb',
                  apiId: 'a4968bdf-fed6-4240-86f3-ba1be4babc90'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/unitedflags/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-h8ao4xeb.netlify.com', category: 'apps'}
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
