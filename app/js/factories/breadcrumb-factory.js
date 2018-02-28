const BreadcrumbFactory = () => {

    let obj = {};
    obj.workflow = 'default';
    obj.label_1 = 'Step One';
    obj.label_2 = 'Step Two';
    obj.label_3 = 'Step Three';
    obj.title = ()=>{
        if(obj.workflow === 'observations'){
            return 'Make an Observation';
        }
        return 'Score an Observation';
    };

    return obj;
};

export default BreadcrumbFactory;
