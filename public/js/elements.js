export const getIncomingCallDialog = (callTypeInfo, acceptCallHandler, rejectCallHandler)=>{
    console.log('getting incomming call dialog');
    //main dialog
    const dialog = document.createElement('div');
    dialog.classList.add('dialog_wrapper');

    //content of dialog (inside dialog)
    const dialogContent = document.createElement('div');
    dialogContent.classList.add('dialog_content');

    //title (inside dialog content)
    const title = document.createElement('p');
    title.classList.add('dialog_title');
    title.innerHTML = `Incoming ${callTypeInfo} call`;

    //imge (inside dialog content)
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('dialog_image_container');
    const image = document.createElement('img');
    const avatarImagePath = './utils/images/dialogAvatar.png';
    image.src = avatarImagePath;
    imageContainer.appendChild(image);

    //both buttons (inside dialog content)
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('dialog_button_container');

    //accept button
    const acceptCallButton = document.createElement('button');
    acceptCallButton.classList.add('dialog_accept_call_button');
    const acceptCallImg = document.createElement('img');
    acceptCallImg.classList.add('dialog_button_img');
    const acceptCallImgPath = './utils/images/acceptCall.png';
    acceptCallImg.src = acceptCallImgPath;
    acceptCallButton.appendChild(acceptCallImg);
    buttonContainer.appendChild(acceptCallButton);

    //reject button
    const rejectCallButton = document.createElement('button');
    rejectCallButton.classList.add('dialog_reject_call_button');
    const rejectCallImg = document.createElement('img');
    rejectCallImg.classList.add('dialog_button_img');
    const rejectCallImgPath = './utils/images/rejectCall.png';
    rejectCallImg.src = rejectCallImgPath;
    rejectCallButton.appendChild(rejectCallImg);
    buttonContainer.appendChild(rejectCallButton);

    //append tree  ----> IMPORTANT
    dialogContent.appendChild(title);
    dialogContent.appendChild(imageContainer);
    dialogContent.appendChild(buttonContainer);
    dialog.appendChild(dialogContent);

    acceptCallButton.addEventListener('click', ()=>{
        acceptCallHandler();
    });

    rejectCallButton.addEventListener('click', ()=>{
        rejectCallHandler();
    });
    
    return dialog;
};

export const getCallingDialog = (rejectCallHandler)=>{
    //main dialog
    const dialog = document.createElement('div');
    dialog.classList.add('dialog_wrapper');

    //content of dialog (inside dialog)
    const dialogContent = document.createElement('div');
    dialogContent.classList.add('dialog_content');

    //title (inside dialog content)
    const title = document.createElement('p');
    title.classList.add('dialog_title');
    title.innerHTML = `Calling`;

    //imge (inside dialog content)
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('dialog_image_container');
    const image = document.createElement('img');
    const avatarImagePath = './utils/images/dialogAvatar.png';
    image.src = avatarImagePath;
    imageContainer.appendChild(image);

    //single reject button (inside dialog content)
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('dialog_button_container');

    //reject button
    const hangUpCallButton = document.createElement('button');
    hangUpCallButton.classList.add('dialog_reject_call_button');
    const hangUpCallImg = document.createElement('img');
    hangUpCallImg.classList.add('dialog_button_img');
    const hangUpCallImgPath = './utils/images/rejectCall.png';
    hangUpCallImg.src = hangUpCallImgPath;
    hangUpCallButton.appendChild(hangUpCallImg);
    buttonContainer.appendChild(hangUpCallButton);

    //append tree  ----> IMPORTANT
    dialogContent.appendChild(title);
    dialogContent.appendChild(imageContainer);
    dialogContent.appendChild(buttonContainer);
    dialog.appendChild(dialogContent);

    hangUpCallButton.addEventListener('click',()=>{
        rejectCallHandler();
    });

    return dialog;
};

export const getInfoDialog = (dialogTitle, dialogDescription)=>{
    //main dialog
    const dialog = document.createElement('div');
    dialog.classList.add('dialog_wrapper');

    //content of dialog (inside dialog)
    const dialogContent = document.createElement('div');
    dialogContent.classList.add('dialog_content');

    //title (inside dialog content)
    const title = document.createElement('p');
    title.classList.add('dialog_title');
    title.innerHTML = dialogTitle;

    //imge (inside dialog content)
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('dialog_image_container');
    const image = document.createElement('img');
    const avatarImagePath = './utils/images/dialogAvatar.png';
    image.src = avatarImagePath;
    imageContainer.appendChild(image);

    //Description
    const description = document.createElement('p');
    description.classList.add('dialog_description');
    description.innerHTML = dialogDescription;

    //append tree  ----> IMPORTANT
    dialogContent.appendChild(title);
    dialogContent.appendChild(imageContainer);
    dialogContent.appendChild(description);
    dialog.appendChild(dialogContent);

    return dialog;
};

export const getLeftMessage = (message)=>{
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message_left_container');
    const messageParagraph = document.createElement('p');
    messageParagraph.classList.add('message_left_paragraph');
    messageParagraph.innerHTML = message;
    messageContainer.appendChild(messageParagraph);

    return messageContainer;
};

export const getRightMessage = (message)=>{
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message_right_container');
    const messageParagraph = document.createElement('p');
    messageParagraph.classList.add('message_right_paragraph');
    messageParagraph.innerHTML = message;
    messageContainer.appendChild(messageParagraph);

    return messageContainer;
}
