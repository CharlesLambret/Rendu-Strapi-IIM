
export default function HeadInfos(props){
    const {meta_name, title, meta_content} = props; 
    return(
        <>
          
                <meta charset="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
                <title>{title}</title>
                <meta name={meta_name} content={meta_content}/>
       
        </>
        
    )
}