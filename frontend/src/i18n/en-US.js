/* eslint-disable */
export default {
  commons: {
    help_documentation:'Help Documentation',
    notification:'Notification',
    api_help_documentation:'API Documentation',
    delete_cancelled:'Canceled delete',
    workspace:'Workspace',
    organization:'Organization',
    setting:'Settings',
    project:'Project',
    about_us:'About',
    current_project:'Current project',
    name:'Name',
    description:'Description',
    annotation:'Annotation',
    clear:'Empty',
    save:'Save',
    save_success:'Save successfully',
    delete_success:'Delete successfully',
    copy_success:'Copy success',
    modify_success:'Modified successfully',
    delete_cancel:'Delete cancelled',
    delete_admin_no:'Admin is not allowed to be deleted',
    confirm:'OK',
    cancel:'Cancel',
    prompt:'Prompt',
    operating:'Operation',
    input_limit:'Length from {0} to {1} characters',
    login:'Login',
    welcome:'Welcome back, please enter your username and password to log in to RiskScanner',
    username:'Name',
    password:'Password',
    input_username:'Please enter the user name',
    input_password:'Please enter a password',
    test:'Test',
    create_time:'Create time',
    update_time:'Update time',
    add:'Add',
    member:'Member',
    email:'Mailbox',
    phone:'Phone',
    role:'Role',
    personal_info:'Personal Information',
    api_keys:'API Keys',
    quota:'Quota Management',
    status:'Status',
    show_all:'Show all',
    show:'Display',
    report:'Report',
    user:'User',
    system:'System',
    personal_setting:'Personal Settings',
    test_resource_pool:'Test resource pool',
    system_setting:'System Settings',
    api:'Interface test',
    performance:'Performance test',
    functional:'Functional test',
    input_content:'Please enter content',
    create:'New',
    edit:'Edit',
    copy:'Copy',
    refresh:'Refresh',
    remark:'Remarks',
    delete:'Delete',
    not_filled:'Not filled',
    please_select:'Please select',
    search_by_name:'Search by name',
    search_by_name_or_id:'Search by ID or name',
    personal_information:'Personal Information',
    exit_system:'Exit the system',
    verification:'Verification',
    title:'Title',
    custom:'Custom',
    select_date:'Select date',
    calendar_heatmap:'Test calendar',
    months_1:'January',
    months_2:'February',
    months_3:'March',
    months_4:'April',
    months_5:'May',
    months_6:'June',
    months_7:'July',
    months_8:'August',
    months_9:'September',
    months_10:'October',
    months_11:'November',
    months_12:'December',
    weeks_0:'Sunday',
    weeks_1:'Monday',
    weeks_2:'Tuesday',
    weeks_3:'Wednesday',
    weeks_4:'Thursday',
    weeks_5:'Friday',
    weeks_6:'Saturday',
    test_unit:'Test',
    system_parameter_setting:'System parameter settings',
    connection_successful:'Connected successfully',
    connection_failed:'Connection failed',
    save_failed:'Save failed',
    host_cannot_be_empty:'Host cannot be empty',
    port_cannot_be_empty:'The port number cannot be empty',
    account_cannot_be_empty:'Account cannot be empty',
    remove:'Remove',
    remove_cancel:'Remove cancel',
    remove_success:'Remove success',
    tips:'The authentication information has expired, please log in again',
    not_performed_yet:'not yet executed',
    incorrect_input:'The input content is incorrect',
    delete_confirm:'Please enter the following to confirm the deletion:',
    login_username:'ID or email',
    input_login_username:'Please enter user ID or email',
    input_name:'Please enter a name',
    please_upload:'Please upload files',
    formatErr:'format error',
    please_save:'Please save first',
    reference_documentation:'Reference documentation',
    id:'ID',
    millisecond:'Milliseconds',
    opt_success:'Operation successful',
    please_input:'Please input',
    detail:'Details',
    date: {
      select_date:'Select date',
      start_date:'Start date',
      end_date:'End date',
      select_date_time:'Select date and time',
      start_date_time:'Start date and time',
      end_date_time:'End date and time',
      range_separator:'to',
      data_time_error:'The start date cannot be greater than the end date',
    },
    trigger_mode: {
      name:'Trigger method',
      manual:'Manual trigger',
      schedule:'Timing task',
      api:'API call'
    },
    adv_search: {
      title:'Advanced Search',
      combine:'Combined query',
      plugin:'Belonging to the plugin',
      search:'Query',
      reset:'Reset',
      and:'all',
      or:'any one',
      operators: {
        like:'include',
        not_like:'not included',
        in:'belongs to',
        not_in:'not belong',
        gt:'greater than',
        ge:'Greater than or equal',
        lt:'less than',
        le:'less than or equal',
        equals:'equal to',
        between:'Between',
        current_user:'is the current user'
      },
    },
    more:'More',
    cannot_be_empty:'Cannot be empty',
    proxy: "Proxy Settings",
    proxy_type: "Proxy Type",
    proxy_port: "Proxy range",
    proxy_name: "Proxy username",
    proxy_password: "Proxy password",
  },
  workspace: {
    create:'Create a workspace',
    update:'Modify workspace',
    delete:'Delete workspace',
    delete_confirm:'Are you sure you want to delete?',
    add:'Add workspace',
    input_name:'Please enter the name of the workspace',
    search_by_name:'Search by name',
    organization_name:'Owning organization',
    please_choose_organization:'Please choose an organization',
    please_select_a_workspace_first:'Please select a workspace first! ',
    none:'No working space',
    select:'Select workspace',
    special_characters_are_not_supported:'Format error (special characters are not supported and cannot start and end with \'-\')',
    delete_warning:'Deleting this workspace will delete all projects in this workspace, as well as all use cases, interface tests, performance tests, etc. in the project. Are you sure you want to delete it?',
  },
  organization: {
    create:'Create an organization',
    modify:'Modify the organization',
    delete:'Delete organization',
    delete_confirm:'Are you sure you want to delete?',
    input_name:'Please enter the organization name',
    select_organization:'Please select an organization',
    search_by_name:'Search by name',
    special_characters_are_not_supported:'Format error (special characters are not supported and cannot start and end with \'-\')',
    none:'Unorganized',
    select:'Select organization',
    delete_warning:'Deleting this organization will delete all related workspaces and all projects under related workspaces under this organization, as well as all use cases, interface tests, performance tests, etc. in the project. Are you sure you want to delete?',
    service_integration:'Service Integration',
    defect_manage:'Defect management platform',
    integration: {
      select_defect_platform:'Please select the defect management platform to be integrated:',
      basic_auth_info:'Basic Auth account information:',
      api_account:'API account',
      api_password:'API password',
      jira_url:'JIRA address',
      jira_issuetype:'Issue Type',
      input_api_account:'Please enter an account',
      input_api_password:'Please enter a password',
      input_jira_issuetype:'Please enter the issue type',
      use_tip:'Use guide:',
      use_tip_tapd:'Tapd Basic Auth account information is queried in "Company Management-Security and Integration-Open Platform"',
      use_tip_jira:'Jira software server authentication information is account password, Jira software cloud authentication information is account + token (account settings-security-create API token)',
      use_tip_two:'After saving the Basic Auth account information, you need to manually associate the ID/key in the RiskScanner project',
      link_the_project_now:'Associate Project Now',
      cancel_edit:'Cancel edit',
      cancel_integration:'Cancel integration',
      cancel_confirm:'Confirm to cancel integration',
      successful_operation:'Operation successful',
      not_integrated:'This platform is not integrated',
      choose_platform:'Please choose an integrated platform',
      verified:'Verification passed'
    }
  },
  member: {
    create:'Add member',
    modify:'Modify members',
    delete_confirm:'Are you sure you want to delete this user?',
    please_choose_member:'Please choose a member',
    search_by_name:'Search by name',
    modify_personal_info:'Modify personal information',
    edit_password:'Modify password',
    edit_information:'Edit information',
    input_name:'Please enter a name',
    input_email:'Please enter email',
    special_characters_are_not_supported:'Special characters are not supported',
    mobile_number_format_is_incorrect:'Mobile number format is incorrect',
    email_format_is_incorrect:'Email format is incorrect',
    password_format_is_incorrect:'Valid password: 8-30 digits, English uppercase and lowercase letters + numbers + special characters (optional)',
    old_password:'Old password',
    new_password:'New password',
    repeat_password:'Confirm password',
    inconsistent_passwords:'The two entered passwords are inconsistent',
    remove_member:'Are you sure you want to remove this member',
    input_id_or_email:'Please enter the user ID, or user email',
    no_such_user:'No such user information, please enter the correct user ID or user mailbox! ',
  },
  user: {
    create:'Create user',
    modify:'Modify user',
    input_name:'Please enter the user name',
    input_id:'Please enter ID',
    input_email:'Please enter email',
    input_password:'Please enter a password',
    input_phone:'Please enter the phone number',
    input_wechat_account:'Please enter the enterprise Wechat account',
    special_characters_are_not_supported:'Special characters are not supported',
    mobile_number_format_is_incorrect:'Mobile number format is incorrect',
    email_format_is_incorrect:'Email format is incorrect',
    delete_confirm:'Are you sure you want to delete this user?',
    apikey_delete_confirm:'Are you sure you want to delete this API Key?',
    input_id_placeholder:'Please enter ID (Chinese is not supported)',
    source:'User source',
    Administrator:'Administrator',
  },
  role: {
    please_choose_role:'Please choose a role',
    admin:'System Administrator',
    org_admin:'Organization Administrator',
    workspace_admin:'Workspace Administrator',
    user:'User',
    viewer:'Read-only user',
    add:'Add role',
  },
  system_parameter_setting: {
    mailbox_service_settings:'Mail Settings',
    wei_service_settings:'Enterprise WeChat Settings',
    ding_service_settings:'Ding Ding Settings',
    test_connection:'Test connection',
    SMTP_host:'SMTP host',
    SMTP_port:'SMTP port',
    SMTP_account:'SMTP account',
    SMTP_password:'SMTP password',
    SSL:'Enable SSL (if the SMTP port is 465, you usually need to enable SSL)',
    TLS:'Enable TLS (if the SMTP port is 587, you usually need to enable TLS)',
    SMTP:'whether anonymous SMTP',
    host:'The host number cannot be empty',
    port:'The port number cannot be empty',
    account:'Account cannot be empty',
    test_user: "Test User",
    basic_wechat:'Basic concepts of enterprise Wechat',
    message_limit_wechat:'Enterprise WeChat message frequency limit',
    basic_dingding:'Basic concept of Dingding',
    message_limit_dingding:'Dingding message frequency limit',
    wechat_account:'Enterprise WeChat account',
    dingding_account:'Dingding account',
    message: {
      setting:'Message notification',
      title:'Title',
      recipient:'Recipient',
      scan_user:'Users scanned this time',
      account_user:'Cloud account creator',
      all_user:'All valid users',
      other_user:'Other user',
      mail_input:'Please enter a valid email',
      mail_content:'Mail content',
      text_content:'Text content',
      message_type:'Message Type',
      trigger_action:'Trigger action',
      email_notification:'Email notification',
      end_scan:'Scan end',
      notes:'Note: Only the overall scan of the cloud account can receive the security compliance scan notification! A single rule scan or partial scan does not send security compliance scan notifications. ',
      task_notification:'Security compliance rule scanning resource notification',
      create_new_notification:'Create a new notification',
      mail_template_example:'Mail template',
      select_events:'Select events',
      message:'Event, recipient, receiving method are required',
      message_webhook:'When the receiving method is Dingding and corporate robots, webhook is required',
      template: "Template",
      mail:'Mail',
      nail_robot:'Ding ding',
      enterprise_wechat_robot:'Enterprise Wechat',
      select_receiving_method:'Select receiving method',
    },
  },
  i18n: {
    home:'Home'
  },
  schedule: {
    input_email:'Please enter your email account',
    event:'Event',
    receiving_mode:'Receiving method',
    receiver:'Receiver',
    operation:'Operation',
    task_notification:'Task notification',
    not_set:'Not set',
    test_name:'Test name',
    running_rule:'Running rule',
    job_status:'Task Status',
    running_task:'Running task',
    next_execution_time:'Next execution time',
    edit_timer_task:'Edit timed task',
    please_input_cron_expression:'Please input Cron expression',
    generate_expression:'Generate expression',
    cron_expression_format_error:'Cron expression format error',
    cron_expression_interval_short_error:'The interval is less than 3 minutes, please avoid performing long tests',
    cron: {
      seconds:'seconds',
      minutes:'Minutes',
      hours:'Hour',
      day:'Day',
      month:'Month',
      weeks:'week',
      years:'year',
      week:'week',
      time_expression:'Time expression',
      complete_expression:'Complete expression',
      allowed_wildcards:'allowed wildcards [,-* /]',
      day_allowed_wildcards:'Allowed wildcards [,-* / L M]',
      weeks_allowed_wildcards:'allowed wildcards [,-* / L M]',
      not_specify:'Do not specify',
      specify:'Specify',
      period:'period',
      from:'From',
      every:'every',
      day_unit:'number',
      start:'Start',
      execute_once:'Execute once',
      last_working_day:'The last working day',
      last_day_of_the_month:'Last day of the month',
      multi_select:'Multiple selection',
      num:'th',
      week_of_weeks:'week of week',
      last_week_of_the_month:'Last week of the month',
      not_fill:'Don not fill',
      recent_run_time:'Last 5 run time',
      no_qualifying_results:'No results that meet the conditions',
    },
    event_success:'Scan successfully',
    event_failed:'Scan failed',
  },
  history: {
    rule:'Scan rule',
    rule_set:'Rule set',
    inspection_report:'Waiting Guarantee Regulations',
    rule_tag:'Rule tag',
    regions:'Scan regions',
    cloud_account:'Cloud account name',
    scan_score:'Security score',
    resource_result:'Non-compliant resources/total resources',
    create_time:'History time',
    scan_resources:'Scan resources',
  },
  dashboard: {
    dashboard:'Homepage',
    overview:'Overview',
    i18n_opt_unit: "Unit: Unit",
    i18n_opt_total: "Total",
    i18n_compliance_ratio: "Compliance Ratio",
    i18n_compliance_true: "Compliance",
    i18n_compliance_false: "Non-compliance",
    i18n_severity_resource_number: "Risk Level/Number of Affected Assets",
    i18n_rule_detail:'Rule Details',
    i18n_cs_apply:'Security Compliance Service',
    i18n_overall_compliance:'Overall compliance',
    i18n_overall_policy_violations:'Classified Statistics',
    i18n_policy_comliance:'Compliance Scan',
    i18n_not_compliance:'Non-compliance statistics',
    i18n_non_compliance_number:'Non-compliance number',
    i18n_non_compliance_proportion:'Proportion of non-compliance',
    i18n_total:'Total',
    i18n_rule_tag_number:'Tag number',
    i18n_ex_rule_not_exist:'The rule definition could not be found',
    i18n_ex_resource_not_exist:'Cannot find resource',
    i18n_ex_request_parameter_error:'Request parameter error',
    i18n_security:'Security',
    i18n_cost:'cost',
    i18n_tagging:'Tagging',
    i18n_other:'Other',
    history:'History',
    rule_detail:'Non-compliant rules',
    cloud_account_statistics:'Cloud account statistics',
    regions_statistics:'Region Statistics',
    cloud_account_statistics_top:'Cloud account statistics TOP 5',
    regions_statistics_top:'Region Statistics TOP 5',
    resource_result_region:'Region (non-compliant resources/total resources)',
    rule_detail_top:'Non-compliant rules Top 5',
    active:'Activity',
    resource_user_name:'Owner',
    resource_user_id:'Operator',
    resource_name:'Resource name',
    resource_type:'Resource type',
    source_ip:'Operation IP',
    time:'Operation time',
    i18n_create:'Create',
    i18n_apply:'Apply',
    i18n_delete:'Delete',
    i18n_update:'Update',
    i18n_login:'Login',
    i18n_logout:'Logout',
    i18n_sync:'Sync',
    i18n_export:'Export',
    active_list:'Active list',
    search_by_name:'Search by operator name',
    expand_all:'Expand all',
  },
  rule: {
    rule:'Scan Rule',
    rule_detail:'Rule information',
    rule_name:'Rule name',
    rule_tag:'Rule tag',
    rule_list:'Rule list',
    rule_tag_list:'tag list',
    tag_key:'tag key',
    tag_name:'tag name',
    _index:'sort order',
    tag_flag:'Is it built-in',
    tag_flag_true:'built-in',
    tag_flag_false:'not built-in',
    create_rule:'Create rule',
    create_tag:'Create tag',
    update_tag:'Modify tag',
    rule_tag_flag:'The built-in rule tag is not allowed to be modified or deleted',
    resource_type:'Resource type',
    severity:'risk level',
    HighRisk:'High Risk',
    MediumRisk:'MediumRisk',
    LowRisk:'Low Risk',
    Normal:'Normal',
    description:'Description',
    last_modified:'Last updated time',
    all:'All',
    rule_yml:'Rule content',
    rule_description:'Rule description',
    middleware_parameter:'Parameter representation',
    middleware_parameter_add:'Add parameter',
    middleware_parameter_default:'default value',
    middleware_name:'Name',
    required:'Required',
    clear:'Clear',
    create:'Create rule',
    update:'Edit rules',
    copy:'Copy rules',
    input_name:'Please enter the rule name',
    input_description:'Please enter a rule description',
    please_choose_tag:'Please choose a tag',
    please_choose_severity:'Please choose the risk level',
    input_phone:'Please enter the phone number',
    special_characters_are_not_supported:'Format error (special characters are not supported and cannot start and end with \'-\')',
    script_require:'Script cannot be empty',
    repeat_key:'Repeat Key',
    ex_request_parameter_error:'Request parameter error',
    rule_name_validate:'Rule name is duplicate, please fill in again',
    opt_success:'Test run successfully',
    dry_run:'Test run',
    number_format_is_incorrect:'The sort order format is incorrect',
    please_choose_rule:'Please select at least one scanning rule',
    status:'Is it enabled',
    rule_set:'Rule set',
    rule_set_name:'Rule set name',
    create_rule_set:'Create a rule set',
    rule_set_list:'Rule set list',
    inspection_report:'Waiting to guarantee inspection regulations',
    re_scan:'Start rescanning',
    rule_group_flag:'The built-in rule group is not allowed to be modified or deleted',
    rule_flag:'The built-in rules are not allowed to be modified and deleted',
    create_group:'Create a rule group',
    update_group:'Modify rule group',
    change_status_on:'Enabled',
    change_status_off:'Disabled',
    full_param:'Please fill in the complete parameters',
    tag_key_pattern:'Can only match English letters',
  },
  resource: {
    statistics:'Compliance Report',
    resource_result:'Scan Result',
    creator:'Creator',
    copied:'copied',
    reset:'Reset',
    i18n_create_manual_task_success:'Create a manual task successfully',
    i18n_create_timing_task_success:'Create timing task successfully',
    i18n_comfirm_resource:'Do you want to jump to the scan result interface?',
    result_statistics_chart: "Scanning result statistics chart",
    result_list:'Scanning result list',
    result_details_list:'Scanning result details list',
    i18n_not_compliance:'Statistics',
    i18n_task_number:'Scan number',
    i18n_task_type:'Rule Type',
    status:'Scan result status',
    i18n_in_process:'Processing',
    i18n_has_exception:'abnormal',
    i18n_has_warn:'Warning',
    i18n_no_warn:'No scan',
    i18n_crteating:'Created',
    i18n_scaning:'Scanning',
    i18n_done:'Done',
    i18n_pauseing:'Pauseing',
    i18n_policy_comliance:'Compliance Scan',
    i18n_non_compliance_number:'Non-compliance number',
    i18n_non_compliance_proportion:'Proportion of non-compliance',
    i18n_total:'Total',
    i18n_compliance_true: "Compliance",
    i18n_compliance_false: "Non-compliance",
    i18n_resource_scanning_log:'Scan log',
    i18n_resource_scanning_api:'Scan API',
    i18n_resource_scanning_return:'scanning result',
    i18n_resource_file:'Scan file:',
    back_resource:'Return to scan result list',
    i18n_log_detail:'Log details',
    i18n_detail:'Rule Details',
    i18n_no_data:'No data yet',
    scan:'Rescan',
    delete_result:'Delete scan results',
    number:'Serial Number',
    F2C_ID:'Resource ID',
    cumulative_audit_resources:'cumulative audit resources',
    compliant_resources:'Number of compliant resources',
    non_compliant_resources:'Number of non-compliant resources',
    pre_inspection:'Wait for guarantee pre-inspection',
    cis_compliance_check:'CIS compliance check',
    oss_compliance_baseline:'Object storage compliance baseline',
    regulation:'Risk Regulations',
    regulation_list:'Risk Regulation List',
    total_regulation:'Total Regulations',
    risky_regulation:'There are risk regulations',
    risk_free_regulations:'No risk regulations',
    security_level:'Security level',
    control_point:'Control point',
    basic_requirements_for_grade_protection:'Basic requirements for grade protection',
    pre_check_results:'Pre-check results',
    suggestions_for_improvement:'Improvement suggestions',
    search_by_name:'Search by name',
    search_by_name_or_id:'Search by ID or name',
    iso_guarantee_report:'Wait for guarantee report',
    risky:'risky',
    risk_free:'No risk',
    risk_of_non_compliance:'There is a risk of non-compliance',
    requirements_of_the_regulations:'Meet the requirements of the regulations',
    report_detail:'Report details',
    risk_point:'risk point',
    resource_result_score:'Scan score (non-compliant resources/total resources)',
    discover_risk:'Discover risk',
    no_risk:'No risk',
    scene_name:'Scene name',
    activation_time:'Activation time',
    scene_description:'Scene description',
    scene_state:'Scene state',
    equal_guarantee_level:'risk level',
    compliance_results:'Compliance Results',
    scan_score:'Cloud account overall scan security score',
    no_resources_allowed:'No resources scanned',
    handle_scans:'Rescanning will all overwrite the previous data, do you want to continue?',
    search_by_report_name:'Search by name of the required terms',
    search_by_f2cid:'Search based on resource identification',
    the_cloud_platform:'The cloud platform',
    not_currently:'Scanning of this type of resource is temporarily not supported: 0/0',
    status_on_off:'Is it compliant',
    download_report:'Download report',
    download_report_description_start:'The current download is',
    download_report_description_end:' generated report, if you need to get the latest report, please rescan it. ',
    audit_name:'Audit name',
    resource_report_xls:'Non-compliant resource scan report.xls',
  },
  account: {
    cloud_account_setting:'Cloud account settings',
    cloud_account:'Cloud Account',
    cloud_platform:'Cloud platform',
    cloud_account_list:'Cloud account list',
    create:'Create a cloud account',
    update:'Edit cloud account',
    one_scan:'One key scan',
    one_validate:'One-key verification',
    name:'Cloud account name',
    plugin:'Cloud plugin',
    status:'Account status',
    create_time:'Create time',
    update_time:'Update time',
    validate:'Verify',
    regions:'Region',
    scan:'Scan',
    creator:'Creator',
    INVALID:'Invalid',
    VALID:'valid',
    DELETE:'Delete',
    NEW:'New',
    input_name:'Please enter the cloud account name',
    input_password:'Please enter a password',
    please_choose_plugin:'Please choose a cloud plugin',
    please_choose_scan_type:'Please select the rule engine type',
    scan_type:'The rule engine type',
    please_choose_region:'Please choose a region',
    please_choose_account:'Please choose a cloud account',
    i18n_account_cloud_plugin_param:'No related plug-in parameters',
    i18n_cs_create_success:'Created successfully',
    i18n_cs_update_success:'Edit successfully',
    delete_confirm:'Confirm to delete',
    success:'Verification succeeded',
    error:'Verification error',
    quick_settings:'Quick Settings',
    start_batch:'Quick scan',
    save_settings:'Save parameters',
    clean_settings:'Clear parameters',
    quick_settings_tip:'Quick settings, you can batch set regional information to the rule list',
    start_batch_tip:'Quick scan, you can scan and execute the selected rule line immediately based on the area information and parameters that have been filled in',
    save_settings_tip:'Save the parameters, bind the parameters of the rule list to this cloud account, so that the data will be scanned according to this data in the subsequent scanning process',
    clean_settings_tip:'Clear the parameters, clear the parameters bound to this cloud account, and scan according to the default parameters in the rule list during the subsequent scanning process',
    back_account:'Return to cloud account list',
    quick_settings_all:'When the rule is not selected, this shortcut sets the area of ​​all rules',
    quick_settings_select:'When certain rules are selected, this shortcut sets all the areas of the selected rules',
    i18n_sync_all:'Select all',
    operating:'Operation:',
    rule_number:'Rule number:',
    scan_score_:'Security score',
    scan_score:'Security score:',
    sv:'Risk level:',
    not_sec:'Non-compliance statistics:',
    i18n_pls_select_rule:'Please select a scan rule',
    i18n_please_select_area_information:'Please select area information',
    aliyun:'Aliyun',
    tencent:'Tencent Cloud',
    huawei:'Huawei Cloud',
    aws:'Amazon AWS',
    azure:'Microsoft Azure',
    vsphere: 'VMware vSphere',
    openstack: 'OpenStack',
    tuning:'Tuning parameters',
    is_save_param_yes:'Parameters configured',
    is_save_param_not:'Parameter not configured',
    save_param:'Whether to configure parameters',
    select:'Select cloud account',
    search:'Search Cloud Account',
    all_label:'All cloud accounts',
    statistical_analysis:'Statistical Analysis',
    show_regions:'Click to view regions',
    region_id:'Region ID',
    region_name:'Region name',
    iam_strategy:'IAM strategy required',
    invalid_cloud_account:'There is an invalid cloud account in the account you selected. The invalid cloud account is not allowed to be scanned, please select again!',
    scan_group_quick:'Rule group quick scan',
    please_choose_rule_group:'Please choose a rule group',
    add_cloud_account:'Add a cloud account',
    delete_this_cloud_account:'Delete this cloud account',
    quartz_task:'Timing task',
    quartz_task_list:'Timing task list',
    cron_expression_desc:'Timing time description',
    last_excute_time:'Last execution time',
    next_excute_time:'Next execution time',
    cron_expression:'cron expression',
    cron_generator:'cron expression generator',
    use_cron_generator:'Use cron generator',
    not_use_cron_generator:'Do not use cron generator',
    generated_cron_expression:'Generated Cron expression',
    is_valid:'Whether to verify',
    task_status:'Timing task status',
    create_quartz_task:'Create a timed task',
    step1:'timing time',
    step2:'scan type',
    step3:'Basic information',
    next_step:'Next',
    pre_step:'Previous step',
    account_add:'Add cloud account',
    cron_not_null:'Timing time is not allowed to be empty',
    qztype_not_null:'Timed task type is not allowed to be empty',
    name_not_null:'Timed task name is not allowed to be empty',
    choose_qztype:'Timing task type',
    please_choose_qztype:'Please select the type of timing task',
    qztype_account:'The type of the scheduled task is a cloud account',
    qztype_rule:'Timed task type is rule',
    please_input_name:'Please enter the name of the task',
    task_input_name:'Task name',
    RUNNING:'Waiting',
    PAUSE:'Pause',
    ERROR:'Error',
    RESUME:'Start',
    DETAIL:'Details',
    resume_success:'Starting the scheduled task successfully',
    pause_success:'Successfully paused the timing task',
    operator:'Creator',
    operation:'Action',
    accountIds_not_null:'Cloud account is not allowed to be empty',
    ruleIds_not_null:'The rule is not allowed to be empty',
    qztype_details:'Timing task details',
    qztype_triggerId:'Timing task ID',
  },
  proxy: {
    create:'Create an agent',
    modify:'Modify agent',
    proxy_type:'Please enter the Proxy type',
    proxy_ip:'Please enter Proxy IP',
    proxy_port:'Please enter the Proxy port',
    proxy_name:'Please enter the Proxy username',
    proxy_password:'Please enter the Proxy password',
    special_characters_are_not_supported:'Special characters are not supported',
    delete_confirm:'Are you sure you want to delete this agent?',
    search_by_proxy_ip:'Search by Proxy IP',
    is_proxy:'Whether to enable proxy',
    add_proxy:'Add proxy',
  },
  second: {
    title:'seconds',
    val: '0 1 2...59',
  },
  minute: {
    title:'Minutes',
    val: '0 1 2...59',
  },
  hour: {
    title:'Hour',
    val: '0 1 2...23',
  },
  dayOfMonth: {
    title:'Day',
    timeUnit:'Day',
    val: '0 1 2...31',
  },
  month: {
    title:'Month',
    timeUnit:'Day',
    val: '0 1 2...12 or 12 months abbreviation (JAN...DEC)',
  },
  dayOfWeek: {
    title:'week',
    timeUnit:'Day',
    val: '0 1 2...7 or abbreviation of week (SUN...SAT)',
  },
  year: {
    title:'year',
    val: '2021 ... 2099',
  },
  common: {
    help:'Help',
    every:'every',
    fromThe:'from the first',
    start:'Start',
    between:'at',
    and:'to',
    end:'between',
    specified:'Fixed',
    current:'本',
    nearest:'Nearest',
    placeholderMulti:'Please select (multiple choices are supported)',
    from:'From',
    index:'a',
    nth:'th',
    use:'Use',
    placeholder:'Please choose',
    valTip:'Value',
    symbolTip:'Wildcard support',
    inputPlaceholder:'Please enter the cron expression timing time',
    wordNumError:'Please enter the cron expression timing time, null values ​​are not allowed',
  },
  custom: {
    unspecified:'not fixed',
    latestWorkday:'Last working day',
    lastTh:'last to last',
    lastOne:'Last One',
    empty:'Do not configure',
    workDay:'Working day',
  },
  webmsg: {
    web_msg:'In-site message notification',
    show_more:'View more',
    all_type:'All types',
    content:'Message content',
    sned_time:'Submission time',
    read_time:'View time',
    type:'Message Type',
    mark_readed:'Mark has been read',
    please_select:'Please select at least one message',
    mark_success:'Mark has been read successfully',
    receive_manage:'Receive management',
    i18n_msg_type_all:'All types',
    channel_inner_msg:'Station message',
  },
  '阿里云': 'Aliyun',
  '腾讯云': 'Tencent',
  '华为云': 'Huawei',
  '管理员': 'Admin',
  '安全': 'Security',
  '费用': 'Cost',
  '标签': 'Label',
};
