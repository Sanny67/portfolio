export default function themedForm(){
    const labelShrink = '10px';
    const labelUnshrink = '14px';
    const labelFloatActive = '0px';
    const labelFloatInactive = '14px';

    // const labelActive = key => {
    //     labels[key]['fontSize'] = labelShrink;
    //     labels[key]['translateY'] = labelFloatActive;
    //     return labels;
    // }

    // const labelInactive = key => {
    //     if(formData[key] === ''){
    //         labels[key]['fontSize'] = labelUnshrink;
    //         labels[key]['translateY'] = labelFloatInactive;
    //         return labels;
    //     }
    // }

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

    return {
        // labelActive,
        // labelInactive,
        labels
    }
}