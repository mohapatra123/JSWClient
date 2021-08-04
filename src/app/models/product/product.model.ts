export class product{
    heading = '';
    description = '';
    imageFile = '';
    solution = '';
    business: business[] = [{heading: '', description: ''}];
    industry: industry[] = [{heading: '', description: ''}]
}

export class business{
    heading = '';
    description = '';
}

export class industry{
    heading = '';
    description = '';
}