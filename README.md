# Notes

https://github.com/nodesense


git clone https://github.com/nodesense/ariba-angular-jan-2020

cd ariba-angular-jan-2020

npm install

ng serve




Module - AppModule
    -- declarations
            components
    -- imports
         external/other modules dependencies

    -- bootstrap
         Root/Main Component -- AppComponent

Component  
    -- selector - html tag
    -- template - embed html into ts
    -- templateUrl - external file
    -- styles - embed styles into ts code
    -- styleUrls - link to external files

MVW - Model View Whatever

JIT - Just In Time
    -- Convert HTML View into JavaScript
    -- Generated JavaScript shall render the view
    -- This conversion happens in Browser
    -- Good for development
    -- not good for production (performance)
    -- View --> JS [Browser, no TS, node.js present]

AOT - Ahead of Time
    -- HTML Views are converted to JS during Build time
    -- Convertion happens on development/build machine
    -- main.js shall include converted JS file, not HTML templates
    -- Good for performance
    -- Happens on Development mahcine, where we have TypeScript, node.js installed
    -- HTML View --> TS (type checking/spelling) --> JS


    Parent -> child [property binding]
    child --> parent (event)


Services
    Application State 
    data sharing amoung siblings 
    data sharing between routes
    Business Logic
    API/Web service communication

    Dependency Injection



https://github.com/nodesense/restful-server


ng g module product
ng g c product/components/product-home
ng g c product/components/product-list
ng g c product/components/product-edit
ng g c product/components/product-search
ng g service product/services/product
ng g class   product/models/product
ng g class   product/models/brand



