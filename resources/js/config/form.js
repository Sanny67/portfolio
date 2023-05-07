import { reactive } from "vue";

export default function themedForm(){
    const labelShrink = '10px';
    const labelUnshrink = '14px';
    const labelFloatActive = '0px';
    const labelFloatInactive = '14px';

    let labels = reactive({
        email: {
            fontSize: labelShrink,
            translateY: labelFloatActive
        },
        password: {
            fontSize: labelShrink,
            translateY: labelFloatActive
        }
    });

    // let labels = reactive({
    //     email: {
    //         fontSize: formData['email'] === '' ? labelUnshrink: labelShrink,
    //         translateY: formData['email'] === '' ? labelFloatInactive: labelFloatActive
    //     },
    //     password: {
    //         fontSize: formData['password'] === '' ? labelUnshrink: labelShrink,
    //         translateY: formData['password'] === '' ? labelFloatInactive: labelFloatActive
    //     }
    // });

    const labelActive = key => {
        labels[key]['fontSize'] = labelShrink;
        labels[key]['translateY'] = labelFloatActive;
        return labels;
    }

    const labelInactive = (key, hasValue) => {
        if(hasValue === 0){
            labels[key]['fontSize'] = labelUnshrink;
            labels[key]['translateY'] = labelFloatInactive;
            return labels;
        }
    }

    return {
        labels,
        labelActive,
        labelInactive
    }
}