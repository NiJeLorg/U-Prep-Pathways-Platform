const BreadcrumbFactory = () => {
    let obj = {
        title: "",
        label1: "",
        label2: ""
    };
    obj.setupBreadCrumb = (workflow, entity) => {
        obj.label1 = entity.teacher.school.name;
        if (workflow === "observations") {
            obj.title = "Make an Observation";
            obj.label2 = entity.observationType.name;
        } else if (workflow === "scores") {
            obj.title = "Score an Observation";
            obj.label2 = "Teachers";
        }
        return obj;
    };

    return obj;
};

export default BreadcrumbFactory;
